$(function() {
    const districtElement = $('#district');
    const regionElement = $('#region');
    const countryElement = $('#country');

    // Function to populate district dropdown
    function populateDistrictDropdown() {
        try {
            districts.forEach(district => {
                const option = new Option(district.name, district.name);
                $(option).data('region', district.region);
                districtElement.append(option);
            });
        } catch (error) {
            console.error('Error populating district dropdown:', error.message);
        }
    }

    // Function to populate country dropdown
    function populateCountryDropdown() {
        try {
            const countries = [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
                "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
                "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
                "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
                "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
                "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
                "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
                "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
                "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
                "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
                "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
                "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
                "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
                "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
                "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
                "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
                "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
                "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
                "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
            ];

            countries.forEach(country => {
                countryElement.append(new Option(country, country));
            });
        } catch (error) {
            console.error('Error populating country dropdown:', error.message);
        }
    }

    // Function to handle nationality change
    function handleNationalityChange() {
        try {
            $('input[name="nationality"]').on('change', function() {
                if ($('#ugandan').is(':checked')) {
                    $('#ninContainer').show();
                    $('#refugeeContainer, #settlementContainer, #countryContainer').hide();
                } else {
                    $('#ninContainer').hide();
                    $('#refugeeContainer, #settlementContainer, #countryContainer').show();
                }
            });
        } catch (error) {
            console.error('Error handling nationality change:', error.message);
        }
    }

    // Function to update region based on selected district
    function updateRegion() {
        try {
            districtElement.on('change', function() {
                const selectedDistrict = $(this).find('option:selected');
                const region = selectedDistrict.data('region');
                regionElement.val(region);
            });
        } catch (error) {
            console.error('Error updating region field:', error.message);
        }
    }

    // Function to handle form submission
    function handleFormSubmission() {
        try {
            $('#nationalityForm').on('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                // Validate all fields are filled
                let isValid = true;
                $('#nationalityForm input, #nationalityForm select').each(function() {
                    if ($(this).is(':visible') && $(this).val() === '') {
                        isValid = false;
                        $(this).addClass('is-invalid');
                    } else {
                        $(this).removeClass('is-invalid');
                    }
                });

                if (isValid) {
                    // Show a notification
                    alert('Form submitted successfully!');

                    // Proceed to the next page (update to the actual next page URL)
                    window.location.href = 'enterpriseDetails.html';
                } else {
                    alert('Please fill in all the required fields.');
                }
            });
        } catch (error) {
            console.error('Error handling form submission:', error.message);
        }
    }

    // Function to initialize Select2 for enhanced select boxes
    function initializeSelect2() {
        try {
            districtElement.select2();
            countryElement.select2();
        } catch (error) {
            console.error('Error initializing Select2:', error.message);
        }
    }

    // Call all the functions to initialize
    try {
        populateDistrictDropdown();
        populateCountryDropdown();
        handleNationalityChange();
        updateRegion();
        handleFormSubmission();
        initializeSelect2();
    } catch (error) {
        console.error('Error during initialization:', error.message);
    }
});
