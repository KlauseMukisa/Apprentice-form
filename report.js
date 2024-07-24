document.addEventListener('DOMContentLoaded', function() {
    // Populate report fields with user data from previous pages
    document.getElementById('reportSurname').textContent = localStorage.getItem('surname') || '';
    document.getElementById('reportOtherNames').textContent = localStorage.getItem('otherNames') || '';
    document.getElementById('reportEmail').textContent = localStorage.getItem('email') || '';
    document.getElementById('reportPhoneNumber').textContent = localStorage.getItem('phoneNumber') || '';
    document.getElementById('reportGender').textContent = localStorage.getItem('gender') || '';
    document.getElementById('reportMaritalStatus').textContent = localStorage.getItem('maritalStatus') || '';
    document.getElementById('reportAge').textContent = localStorage.getItem('age') || '';

    document.getElementById('reportCategory').textContent = localStorage.getItem('category') || '';
    if (localStorage.getItem('categorySpecific')) {
        document.getElementById('reportCategorySpecificRow').style.display = '';
        document.getElementById('reportCategorySpecific').textContent = localStorage.getItem('categorySpecific') || '';
    }

    document.getElementById('reportNationality').textContent = localStorage.getItem('nationality') || '';
    document.getElementById('reportResidenceCountry').textContent = localStorage.getItem('residenceCountry') || '';
    if (localStorage.getItem('nin')) {
        document.getElementById('reportNINRow').style.display = '';
        document.getElementById('reportNIN').textContent = localStorage.getItem('nin') || '';
    }
    if (localStorage.getItem('passport')) {
        document.getElementById('reportPassportRow').style.display = '';
        document.getElementById('reportPassport').textContent = localStorage.getItem('passport') || '';
    }

    document.getElementById('reportEnterpriseName').textContent = localStorage.getItem('enterpriseName') || '';
    document.getElementById('reportOwnershipType').textContent = localStorage.getItem('ownershipType') || '';
    document.getElementById('reportWomenOwnership').textContent = localStorage.getItem('womenOwnership') || '';
    document.getElementById('reportEstablishmentYear').textContent = localStorage.getItem('establishmentYear') || '';
    document.getElementById('reportContactNumber1').textContent = localStorage.getItem('contactNumber1') || '';
    document.getElementById('reportContactNumber2').textContent = localStorage.getItem('contactNumber2') || '';
    document.getElementById('reportBusinessEmail').textContent = localStorage.getItem('businessEmail') || '';
    document.getElementById('reportPoBox').textContent = localStorage.getItem('poBox') || '';
    document.getElementById('reportDistrict').textContent = localStorage.getItem('district') || '';
    document.getElementById('reportSubCounty').textContent = localStorage.getItem('subCounty') || '';
    document.getElementById('reportParish').textContent = localStorage.getItem('parish') || '';
    document.getElementById('reportVillage').textContent = localStorage.getItem('village') || '';

    document.getElementById('reportSector').textContent = localStorage.getItem('sector') || '';
    document.getElementById('reportProductsServices').textContent = localStorage.getItem('productsServices') || '';
    document.getElementById('reportEmployees').textContent = localStorage.getItem('employees') || '';
    document.getElementById('reportAnnualRevenue').textContent = localStorage.getItem('annualRevenue') || '';
    document.getElementById('reportYearsInOperation').textContent = localStorage.getItem('yearsInOperation') || '';

    var training = localStorage.getItem('training') || 'No';
    document.getElementById('reportTraining').textContent = training;
    if (training === 'Yes') {
        document.getElementById('reportSkillsTypeRow').style.display = '';
        document.getElementById('reportTrainingDurationRow').style.display = '';
        document.getElementById('reportSkillsType').textContent = localStorage.getItem('skillsType') || '';
        document.getElementById('reportTrainingDuration').textContent = localStorage.getItem('trainingDuration') || '';
    }
    document.getElementById('reportDesiredSector').textContent = localStorage.getItem('desiredSector') || '';
});

function navigateToPage(pageNumber) {
    // Function to navigate to a specific page
    document.querySelectorAll('.pages').forEach(function(page, index) {
        page.style.display = (index === pageNumber) ? 'block' : 'none';
    });
}