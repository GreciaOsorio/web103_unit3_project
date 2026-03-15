const API_BASE_URL = '/events'; // Base URL for events API

// Fetch all events
export const fetchEvents = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

// Fetch a single event by ID
export const fetchEventById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch event');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        throw error;
    }
};

// Fetch events by location (city)
export const fetchEventsByLocation = async (location) => {
    try {
        const response = await fetch(`${API_BASE_URL}/location/${location}`);
        if (!response.ok) {
            throw new Error('Failed to fetch events by location');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events by location:', error);
        throw error;
    }
};

// Fetch unique locations (cities)
export const fetchUniqueLocations = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations`);
        if (!response.ok) {
            throw new Error('Failed to fetch locations');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching unique locations:', error);
        throw error;
    }
};