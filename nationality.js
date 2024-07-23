$(document).ready(function() {
    const data = {
        districts: {
            'Kampala': ['Central', 'Makindye', 'Kawempe'],
            'Mbarara': ['Western', 'Nyakayojo', 'Rubindi'],
            'Gulu': ['Gulu Town', 'Bar-dege', 'Layibi'],
            'Jinja': ['Jinja City', 'Bujagali', 'Masese']
        },
        settlements: ['Nakivale', 'Kyaka', 'Kiryandongo'],
        countries: ['Rwanda', 'Burundi', 'DR Congo']
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
