document.addEventListener('DOMContentLoaded', function () {
    // Sample data for districts, regions, settlements, and countries
    const data = {
        districts: {
            'Kampala': ['Central', 'Makindye', 'Kawempe'],
            'Mbarara': ['Western', 'Nyakayojo', 'Rubindi'],
            'Gulu': ['Gulu Town', 'Bar-dege', 'Layibi'],
            'Jinja': ['Jinja City', 'Bujagali', 'Masese']
            // Add more districts and regions as needed
        },
        settlements: ['Nakivale', 'Kyaka', 'Kiryandongo'],
        countries: ['Rwanda', 'Burundi', 'DR Congo'] // Example countries for refugees
    };

    // Toggle visibility based on nationality selection
    const nationalityRadios = document.querySelectorAll('input[name="nationality"]');
    nationalityRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('ugandan').checked) {
                document.getElementById('ninContainer').style.display = 'block';
                document.getElementById('refugeeContainer').style.display = 'none';
                populateDistricts(); // Populate districts for Ugandans
                document.getElementById('district').dispatchEvent(new Event('change')); // Trigger change event to update regions
            } else if (document.getElementById('refugee').checked) {
                document.getElementById('refugeeContainer').style.display = 'block';
                document.getElementById('ninContainer').style.display = 'none';
                populateSettlements(); // Populate settlements for refugees
                populateCountries(); // Populate countries for refugees
            }
        });
    });

    function populateDistricts() {
        const districtSelect = document.getElementById('district');
        districtSelect.innerHTML = '<option value="" disabled selected>Select</option>';
        for (let district in data.districts) {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        }
    }

    function populateRegions() {
        const regionSelect = document.getElementById('region');
        regionSelect.innerHTML = '<option value="" disabled selected>Select</option>';
        const selectedDistrict = document.getElementById('district').value;
        if (selectedDistrict && data.districts[selectedDistrict]) {
            data.districts[selectedDistrict].forEach(region => {
                const option = document.createElement('option');
                option.value = region;
                option.textContent = region;
                regionSelect.appendChild(option);
            });
        }
    }

    function populateSettlements() {
        const settlementSelect = document.getElementById('settlement');
        settlementSelect.innerHTML = '<option value="" disabled selected>Select</option>';
        data.settlements.forEach(settlement => {
            const option = document.createElement('option');
            option.value = settlement;
            option.textContent = settlement;
            settlementSelect.appendChild(option);
        });
    }

    function populateCountries() {
        const countrySelect = document.getElementById('country');
        countrySelect.innerHTML = '<option value="" disabled selected>Select</option>';
        data.countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
    }

    // Handle district change to update regions
    document.getElementById('district').addEventListener('change', populateRegions);

    // Handle form submission
    document.getElementById('nationalityForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Clear previous validation errors
        this.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-invalid'));

        // Check if the required fields are filled
        this.querySelectorAll('[required]').forEach(input => {
            if (input.value === '' || input.value === null) {
                input.classList.add('is-invalid');
                isValid = false;
            }
        });

        if (isValid) {
            // Show SweetAlert notification
            Swal.fire({
                title: 'Success!',
                text: 'Form submitted successfully.',
                icon: 'success',
                confirmButtonText: 'Continue'
            }).then(function () {
                // Transition to the next page (page4)
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.add('active');
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all required fields.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    });
});