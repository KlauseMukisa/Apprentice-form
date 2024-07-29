$(document).ready(function() {
    const data = {
        districts: {
            'Abim': ['Northern'],
            'Adjumani': ['Northern'],
            'Agago': ['Northern'],
            'Alebtong': ['Northern'],
            'Amuria': ['Northern'],
            'Amudat': ['Northern'],
            'Amuru': ['Northern'],
            'Apac': ['Northern'],
            'Budaka': ['Eastern'],
            'Bududa': ['Eastern'],
            'Bugiri': ['Eastern'],
            'Buikwe': ['Central'],
            'Buliisa': ['Western'],
            'Bundibugyo': ['Western'],
            'Bunyangabu': ['Western'],
            'Bushenyi': ['Western'],
            'Butambala': ['Central'],
            'Butebo': ['Eastern'],
            'Butere': ['Western'],
            'Dokolo': ['Northern'],
            'Gomba': ['Central'],
            'Gulu': ['Northern'],
            'Hoima': ['Western'],
            'Iganga': ['Eastern'],
            'Isingiro': ['Western'],
            'Jinja': ['Eastern'],
            'Kabale': ['Western'],
            'Kabarole': ['Western'],
            'Kaberamaido': ['Northern'],
            'Kagadi': ['Western'],
            'Kakumiro': ['Western'],
            'Kalangala': ['Central'],
            'Kaliro': ['Eastern'],
            'Kampala': ['Central'],
            'Kamuli': ['Eastern'],
            'Kamwenge': ['Western'],
            'Kanungu': ['Western'],
            'Kapchorwa': ['Eastern'],
            'Kapelebyong': ['Northern'],
            'Kassanda': ['Central'],
            'Kiboga': ['Central'],
            'Kibuku': ['Eastern'],
            'Kiryandongo': ['Western'],
            'Kisoro': ['Western'],
            'Kitgum': ['Northern'],
            'Kween': ['Eastern'],
            'Kumi': ['Eastern'],
            'Kyegegwa': ['Western'],
            'Kyenjojo': ['Western'],
            'Lira': ['Northern'],
            'Luuka': ['Eastern'],
            'Lwengo': ['Central'],
            'Manafwa': ['Eastern'],
            'Masaka': ['Central'],
            'Mbarara': ['Western'],
            'Mitooma': ['Western'],
            'Mityana': ['Central'],
            'Moroto': ['Northern'],
            'Moyo': ['Northern'],
            'Nakaseke': ['Central'],
            'Nakasongola': ['Central'],
            'Namayingo': ['Eastern'],
            'Namutumba': ['Eastern'],
            'Napak': ['Northern'],
            'Nebbi': ['Northern'],
            'Ngora': ['Eastern'],
            'Ntoroko': ['Western'],
            'Ntungamo': ['Western'],
            'Rakai': ['Central'],
            'Rubanda': ['Western'],
            'Rubirizi': ['Western'],
            'Rukiga': ['Western'],
            'Rukungiri': ['Western'],
            'Sironko': ['Eastern'],
            'Ssembabule': ['Central'],
            'Sseke': ['Central'],
            'Tororo': ['Eastern'],
            'Wakiso': ['Central'],
            'Yumbe': ['Northern']
        },
    
    
        settlements: [
            'Nakivale',
            'Kyaka',
            'Kiryandongo',
            'Rwamwanja',
            'Bidi Bidi',
            'Kyaka II',
            'Palorinya',
            'Imvepi',
            'Bidibidi',
            'Kyangwali',
            'Oruchinga',
            'Nyangia',
            'Lumino',
            'Arua'
        ],
        countries: [
            'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
            'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
            'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
            'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
            'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica',
            'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
            'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland',
            'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
            'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
            'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo',
            'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
            'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
            'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
            'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia',
            'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
            'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
            'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
            'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain',
            'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
            'Timor-Leste', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
            'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia',
            'Zimbabwe'
        ]
    };

    $('input[name="nationality"]').on('change', function() {
        if ($('#ugandan').is(':checked')) {
            $('#ninContainer').show();
            $('#refugeeContainer').hide();
            populateDistricts();
            $('#district').trigger('change');
        } else if ($('#refugee').is(':checked')) {
            $('#refugeeContainer').show();
            $('#ninContainer').hide();
            populateSettlements();
            populateCountries();
        }
    });

    function populateDistricts() {
        const districtSelect = $('#district');
        districtSelect.empty().append('<option value="" disabled selected>Select</option>');
        $.each(data.districts, function(district) {
            districtSelect.append(`<option value="${district}">${district}</option>`);
        });
    }

    function populateRegions() {
        const regionSelect = $('#region');
        regionSelect.empty().append('<option value="" disabled selected>Select</option>');
        const selectedDistrict = $('#district').val();
        if (selectedDistrict && data.districts[selectedDistrict]) {
            $.each(data.districts[selectedDistrict], function(index, region) {
                regionSelect.append(`<option value="${region}">${region}</option>`);
            });
        }
    }

    function populateSettlements() {
        const settlementSelect = $('#settlement');
        settlementSelect.empty().append('<option value="" disabled selected>Select</option>');
        $.each(data.settlements, function(index, settlement) {
            settlementSelect.append(`<option value="${settlement}">${settlement}</option>`);
        });
    }

    function populateCountries() {
        const countrySelect = $('#country');
        countrySelect.empty().append('<option value="" disabled selected>Select</option>');
        $.each(data.countries, function(index, country) {
            countrySelect.append(`<option value="${country}">${country}</option>`);
        });
    }

    $('#district').on('change', function() {
        populateRegions();
    });

    $('#nationalityForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;
        $(this).find('[required]').each(function() {
            if ($(this).val() === '' || $(this).val() === null) {
                $(this).addClass('is-invalid');
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (isValid) {
            Swal.fire({
                title: 'Success!',
                text: 'Your nationality and residence details have been submitted successfully.',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                $('#page3').hide();
                $('#page4').show();
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
