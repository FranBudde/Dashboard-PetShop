const userService = {
    async get() {
        try {
            // Colocar la url del user
            const response = await fetch("http://localhost:3030/api/products");
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default userService;