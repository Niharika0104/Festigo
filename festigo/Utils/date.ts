export function formatTime(dateString: string): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }

    const now = new Date();
    const sameDay = date.toDateString() === now.toDateString();
    const sameWeek = isSameWeek(date, now);

    if (sameDay) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    } else if (sameWeek) {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
        return date.toLocaleDateString('en-US');
    }
}

function isSameWeek(date1: Date, date2: Date): boolean {
    const startOfWeek = (date: Date): Date => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
        return new Date(date.setDate(diff));
    };

    const date1StartOfWeek = startOfWeek(new Date(date1));
    const date2StartOfWeek = startOfWeek(new Date(date2));

    return date1StartOfWeek.toDateString() === date2StartOfWeek.toDateString();
}