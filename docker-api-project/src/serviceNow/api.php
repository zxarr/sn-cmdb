<?php
require_once __DIR__ . '/../../vendor/autoload.php';

use Dotenv\Dotenv;

header('Content-Type: application/json');

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$serviceNowUrl = $_ENV['SERVICE_NOW_API_URL'] ?? '';
$username = $_ENV['SERVICE_NOW_USERNAME'] ?? '';
$password = $_ENV['SERVICE_NOW_PASSWORD'] ?? '';

function fetchServiceNowData($url, $username, $password) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Accept: application/json',
        'Authorization: Basic ' . base64_encode("$username:$password")
    ]);

    $response = curl_exec($ch);

    if ($response === false) {
        curl_close($ch);
        http_response_code(500);
        echo json_encode(['error' => 'Error fetching data from ServiceNOW']);
        exit;
    }

    curl_close($ch);

    $data = json_decode($response, true);

    if (!isset($data['result'])) {
        http_response_code(500);
        echo json_encode(['error' => 'Invalid response from ServiceNOW']);
        exit;
    }

    $list = array_map(function ($item) {
        return [
            'hostName' => $item['name'] ?? '',
            'operatingSystem' => $item['os'] ?? '',
            'location' => $item['location'] ?? '',
            'ipAddress' => $item['ip_address'] ?? '',
            'description' => $item['description'] ?? ''
        ];
    }, $data['result']);

    return $list;
}

echo json_encode(fetchServiceNowData($serviceNowUrl, $username, $password));