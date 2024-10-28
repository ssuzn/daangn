export const emailDuplicateCheck = async (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const storedEmails = JSON.parse(localStorage.getItem("registeredEmails")) || [];

            const isAvailable = !storedEmails.includes(email);
            resolve(isAvailable);
        }, 500);
    });
};