document.getElementById('analyzeButton').addEventListener('click', analyzeActivity);

function analyzeActivity() {
    const activityLink = document.getElementById('activityLink').value;
    const runType = document.getElementById('runType').value;
    const age = parseInt(document.getElementById('age').value);

    // Simulated data fetching from Strava API
    // In a real application, you would fetch this data using an API call
    const simulatedHeartRateData = {
        averageHeartRate: 160, // Example average heart rate
        maxHeartRate: calculateMaxHeartRate(age) // Calculate max heart rate
    };

    const percentageOfMaxHR = (simulatedHeartRateData.averageHeartRate / simulatedHeartRateData.maxHeartRate) * 100;

    let resultMessage = '';
    if ((runType === 'easy' && percentageOfMaxHR > 70) || 
        (runType === 'moderate' && percentageOfMaxHR > 80) || 
        (runType === 'hard' && percentageOfMaxHR > 90)) {
        resultMessage = 'OVERTRAINING: THIS WAS NOT AN ' + runType.toUpperCase() + ' RUN';
        document.getElementById('result').classList.add('overtraining');
    } else {
        resultMessage = 'This run is within acceptable limits for a ' + runType + ' run.';
        document.getElementById('result').classList.remove('overtraining');
    }

    document.getElementById('result').innerText = resultMessage;
}

function calculateMaxHeartRate(age) {
    return 220 - age; // Simple formula for max heart rate
}