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
    hostname: string; // Detailed hostname if different from Host IP
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

export interface Report {
    _id: string;
    submitted: boolean;
    title: string;
    compromisedTeams: string[]; // Array of Team IDs
    reportData: ReportData;
}

export interface ReportData {
    author: string; // User which made the report, will be relevant when user identities are implemented
    evidence: string;
    attackingIp: string;
    compromisedIp: string;
    universallyAttempted: boolean;
    attackVector: string;
    accessLevel: string;
    persistenceEstablished: boolean;
    piiDataAccessed: boolean;
    passwordDataAccessed: boolean;
    systemConfigDataAccessed: boolean;
    databaseDataAccessed: boolean;
    evidenceText: string;
}

export interface Template {
    _id: string;
    title: string;
    evidence: string;
    compromisedIp: string;
    universallyAttempted: boolean;
    persistence: boolean;
    attackVector: string;
    accessLevel: string;
    dataAccessed: ReportDataAccessed;
}

// Additional interfaces if needed for specific functionality or relationships
