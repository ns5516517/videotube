export const postApi = async (url, formData) => {
    try {
        const resp = await fetch(`${process.env.API_URL}${url}`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!resp.ok) {
            const err = await resp.json()
            return err
        }
        const result = await resp.json();
        return result
    } catch (err) {
        console.error(`HTTP error: ${err}`)
    }
}

export const getApi = async (url) => {
    try {
        const resp = await fetch(`${process.env.API_URL}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 10
            }
        })
        if (!resp.ok) {
            const err = await resp.json()
            return err
        }
        const result = await resp.json();
        return result
    } catch (err) {
        console.error(`HTTP error: ${err}`)
    }
}

export const dateFormatter = (createdAt = '') => {
    if (!createdAt) return '';

    const currentDate = new Date();
    const date = new Date(createdAt);
    const diff = currentDate - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    if (seconds < 60) return "just now";
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    return `${years} year${years > 1 ? 's' : ''} ago`;
};