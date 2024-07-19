document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#nationalityForm");

    // Containers for different sections
    const ninContainer = document.querySelector("#ninContainer");
    const refugeeContainer = document.querySelector("#refugeeContainer");
    const settlementContainer = document.querySelector("#settlementContainer");
    const countryContainer = document.querySelector("#countryContainer");
    const districtContainer = document.querySelector("#districtContainer");
    const districtSelect = document.querySelector("#district");
    const regionSelect = document.querySelector("#region");
    const subCountyInput = document.querySelector("#subCounty");
    const parishInput = document.querySelector("#parish");
    const villageInput = document.querySelector("#village");

    const ugandanRadio = document.querySelector("#ugandan");
    const refugeeRadio = document.querySelector("#refugee");

    // Data for countries, settlements, and regions with districts
    const countries = ["United States", "Uganda", "Kenya", "Rwanda"]; // Replace with actual country list
    const settlements = [
        "Bidi Bidi", "Rhino Camp", "Palorinya", "Imvepi", "Arua", 
        "Kiryandongo", "Nakivale", "Kyaka II", "Oruchinga", 
        "Rwamwanja", "Nyakabande", "Kyangwali", "Adjumani", 
        "Moyo"
    ]; // Replace with actual settlements list
    const regionsWithDistricts = {
        "Central": ["Kampala", "Wakiso", "Mukono", "Luweero"],
        "Northern": ["Gulu", "Lira", "Kitgum", "Pader"],
        "Eastern": ["Mbale", "Jinja", "Soroti", "Kumi"],
        "Western": ["Mbarara", "Kabale", "Kasese", "Bushenyi"]
        // Add more regions and districts as necessary
    };

    // Populate country and settlement dropdowns
    const countrySelect = document.querySelector("#country");
    const settlementSelect = document.querySelector("#settlement");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    settlements.forEach(settlement => {
        const option = document.createElement("option");
        option.value = settlement;
        option.textContent = settlement;
        settlementSelect.appendChild(option);
    });

    // Populate region dropdown
    const populateRegions = () => {
        const regions = Object.keys(regionsWithDistricts);
        regions.forEach(region => {
            const option = document.createElement("option");
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });
    };

    populateRegions();

    // Handle radio button changes
    ugandanRadio.addEventListener("change", function() {
        ninContainer.style.display = 'block';
        refugeeContainer.style.display = 'none';
        settlementContainer.style.display = 'none';
        countryContainer.style.display = 'none';
        districtContainer.style.display = 'block';
        regionSelect.parentElement.style.display = 'block';
        subCountyInput.parentElement.style.display = 'block';
        parishInput.parentElement.style.display = 'block';
        villageInput.parentElement.style.display = 'block';

        // Reset and hide district and region
        districtSelect.innerHTML = '<option value="" disabled selected>Select</option>';
        regionSelect.value = '';
        subCountyInput.value = '';
        parishInput.value = '';
        villageInput.value = '';
    });

    refugeeRadio.addEventListener("change", function() {
        ninContainer.style.display = 'none';
        refugeeContainer.style.display = 'block';
        settlementContainer.style.display = 'block';
        countryContainer.style.display = 'block';
        districtContainer.style.display = 'none';
        regionSelect.parentElement.style.display = 'none';
        subCountyInput.parentElement.style.display = 'none';
        parishInput.parentElement.style.display = 'none';
        villageInput.parentElement.style.display = 'none';
    });

    // Handle region changes to populate district dropdown
    regionSelect.addEventListener("change", function() {
        const selectedRegion = regionSelect.value;
        const districts = regionsWithDistricts[selectedRegion] || [];
        
        districtSelect.innerHTML = '<option value="" disabled selected>Select</option>';
        districts.forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });

        // Clear previous selection
        districtSelect.value = '';
    });

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
            return;
        }

        Swal.fire({
            title: "Success!",
            text: "Form submitted successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000 // Auto-dismiss after 2 seconds
        }).then(() => {
            setTimeout(() => {
                document.getElementById('page3').style.display = 'none';
                document.getElementById('page4').style.display = 'block'; // Make sure this ID matches your next page ID
            }, 2000); // Wait for the notification to be visible before transitioning
        });
    });
});