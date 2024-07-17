document.addEventListener('DOMContentLoaded', function () {
    const ugandanRadio = document.getElementById('ugandan');
    const refugeeRadio = document.getElementById('refugee');
    const ugandanFields = document.getElementById('ugandanFields');
    const refugeeFields = document.getElementById('refugeeFields');
    const districtSelect = document.getElementById('district');
    const regionInput = document.getElementById('region');
    const nationalityForm = document.getElementById('nationalityForm');
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');

    const districts = [
        { name: 'Kampala', region: 'Central' },
        { name: 'Gulu', region: 'Northern' },
        { name: 'Mbarara', region: 'Western' },
        { name: 'Jinja', region: 'Eastern' }
        // Add more districts as needed
    ];

    const countries = ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'South Sudan'];
    const settlements = ['Bidibidi', 'Nakivale', 'Kyaka II', 'Kiryandongo', 'Rhino Camp'];

    // Populate district dropdown
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district.name;
        option.textContent = district.name;
        districtSelect.appendChild(option);
    });

    // Populate country dropdown
    const countrySelect = document.getElementById('country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    // Populate settlement dropdown
    const settlementSelect = document.getElementById('settlement');
    settlements.forEach(settlement => {
        const option = document.createElement('option');
        option.value = settlement;
        option.textContent = settlement;
        settlementSelect.appendChild(option);
    });

    // Show/hide fields based on nationality selection
    ugandanRadio.addEventListener('change', function () {
        if (ugandanRadio.checked) {
            ugandanFields.style.display = 'block';
            refugeeFields.style.display = 'none';
        }
    });

    refugeeRadio.addEventListener('change', function () {
        if (refugeeRadio.checked) {
            refugeeFields.style.display = 'block';
            ugandanFields.style.display = 'none';
        }
    });

    // Auto-fill region based on district selection
    districtSelect.addEventListener('change', function () {
        const selectedDistrict = districtSelect.value;
        const district = districts.find(d => d.name === selectedDistrict);
        regionInput.value = district ? district.region : '';
    });

    // Handle form submission
    nationalityForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alertMessage.textContent = 'Form submitted successfully!';
        alertContainer.style.display = 'block';
        setTimeout(() => {
            // Navigate to the next page or perform any other desired action
            alertContainer.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'block';
           // Change this to the actual next page URL
        }, 2000);
    });
});