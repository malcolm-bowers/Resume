async function sendEmail() {
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    try {
        showLoader();
        const response = await fetch("https://emailsv.azurewebsites.net", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        setTimeout(location.reload(), 5000);
    } catch (error) {
        console.error("There was an error submitting the form", error);
    }
}
function showLoader() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("emailForm").style.display = "none";
}