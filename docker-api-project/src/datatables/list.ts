export interface CMDBEntry {
    hostName: string;
    operatingSystem: string;
    location: string;
    ipAddress: string;
    description: string;
}

export function createDataTable(data: CMDBEntry[]) {
    const formattedData = data.map(entry => ({
        HostName: entry.hostName,
        OperatingSystem: entry.operatingSystem,
        Location: entry.location,
        IPAddress: entry.ipAddress,
        Description: entry.description
    }));

    // Here you can add methods for editing the list if needed

    return formattedData;
}