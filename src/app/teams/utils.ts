export const getTeams = async () => {
    try {
        const response = await fetch('/api/teams');
        if (!response.ok) {
            throw new Error('Failed to fetch teams');
        }
        const data = await response.json();
        return data.teams; // Assuming the response JSON has a teams field
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const getServices = async () => {
    try {
        const response = await fetch('/api/services');
        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        return data.services; // Assuming the response JSON has a services field
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

export const getIndicatorColor = (percentage: number) => {
    if (percentage >= 50) {
        return 'green';
    } else if (percentage >= 30) {
        return 'orange';
    } else {
        return 'red';
    }
};