export interface Team {
    _id: string;
    notes: string;
    score: number;
    hosts: string[]; // Array of Host IDs
    liveServiceCount: number;
    liveServicePercentage: number;
    collectedPasswordsCount: number;
    collectedPIICount: number;
}

export interface Host {
    _id: string;
    ip: string; // Replacing 'name' with 'ip'
    team: string; // Reference to Team ID
    lastSeen: Date | string;
    notes: string;
    services: string[]; // Array of Service IDs
    liveServiceCount?: number; // Optional, can be computed dynamically
    collectedPasswordsCount: number;
    collectedPIICount: number;
}

export interface Service {
    _id: string;
    ip: string;
    hostname: string; // Detailed hostname if different from Host IP
    serviceIdentifier: string; // Unique combination of hostname and port
    port: number;
    protocol: string;
    product: string;
    version: string;
    CVEList: string[];
    status: string;
    lastConnection: Date | string;
    host: string; // Reference to Host ID
    team: string; // Reference to Team ID for easier aggregation
    notes: string;
}

// Additional interfaces if needed for specific functionality or relationships
