// Navigation Helper
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Login Logic
function requestOTP() {
    const phone = document.getElementById('phone').value;
    if (phone.length < 10) {
        alert("Please enter a valid phone number");
        return;
    }
    // Simulate OTP sending
    document.getElementById('otp-section').classList.remove('hidden');
    console.log("OTP Sent to:", phone);
}

function verifyLogin() {
    const otp = document.getElementById('otp').value;
    if (otp === "123456") { // Mock verification
        navigateTo('verify-page');
    } else {
        alert("Invalid OTP. Try 123456");
    }
}

// Verification Logic (No-KYC Trust System)
function submitVerification() {
    const selfie = document.getElementById('selfie').files[0];
    const social = document.getElementById('social-link').value;

    if (!selfie) {
        alert("Please upload a selfie for identity consistency.");
        return;
    }

    // Process the "Lightweight Trust" indicators
    console.log("Uploading Selfie:", selfie.name);
    console.log("Social Link Linked:", social || "None provided");

    alert("Profile submitted! You are now a Basic Verified Guardian.");
    // In a full app, this would redirect to the Guardian Dashboard
}
