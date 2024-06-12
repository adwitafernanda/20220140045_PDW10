document.getElementById('kuisionerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const genderSelect = document.getElementById('gender');
    const gender = genderSelect.options[genderSelect.selectedIndex].text;
    const feedback = document.getElementById('feedback').value;

    // Get current date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('id-ID', options);

    // Create a notification message
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <h2>Terima Kasih, ${name}!</h2>
        <p>Email: ${email}</p>
        <p>Umur: ${age}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Feedback: ${feedback}</p>
        <p>Tanggal: ${formattedDate}</p>
        <button id="closeNotif">Tutup</button>
    `;

    // Append notification to the body
    document.body.appendChild(notification);

    // Add event listener to close the notification
    document.getElementById('closeNotif').addEventListener('click', function() {
        document.body.removeChild(notification);
    });
});
