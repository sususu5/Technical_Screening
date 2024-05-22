function copyEmail() {
    var copyEmail = document.getElementById("copyEmailInput");
    copyEmail.select();
    navigator.clipboard.writeText(copyEmail.value);
    alert("Email copied successfully🎉")
}

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}