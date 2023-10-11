function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic username and password validation
    if (username === "" || password === "") {
        alert("Username and password are required.");
        return false;
    }

    // Simulate password hashing (replace with actual hashing)
    const hashedPassword = hashPassword(password);

    // Check the hashed password (replace with your authentication logic)
    if (checkPassword(username, hashedPassword)) {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password.");
        return false;
    }
}

function hashPassword(password) {
    // In a real application, you would use a secure hashing algorithm
    // This is a simplified example using SHA-256 (not recommended for production)
    const hash = sha256(password);
    return hash;
}

function checkPassword(username, hashedPassword) {
    // In a real application, you would check the stored hashed password for the given username
    // This is a simplified example, you should replace it with your authentication logic
    return username === "demo" && hashedPassword === hashPassword("demo123");
}

// Simple SHA-256 hash function (not suitable for production)
function sha256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    return crypto.subtle.digest("SHA-256", data).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    });
}
