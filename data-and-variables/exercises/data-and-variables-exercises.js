// Declare and assign the variables below
    let shuttleName = 'Determination';
    let shuttleSpeedMph = 17500; 
    let distanceToMarsKm = 225000000; 
    let distanceToMoonKm = 384400; 
    const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
    console.log(typeof shuttleName);
    console.log(typeof shuttleSpeedMph);
    console.log(typeof distanceToMarsKm);
    console.log(typeof distanceToMoonKm);
    console.log(typeof milesPerKm);
// Calculate a space mission below
    let milesToMoon = distanceToMoonKm * milesPerKm;
    let hoursToMoon = milesToMoon / shuttleSpeedMph;
    let daysToMoon = hoursToMoon / 24;
// Print the results of the space mission calculations below
    console.log(shuttleName + "will take" + daysToMoon + "days to reach the Moon");
// Calculate a trip to the moon below

// Print the results of the trip to the moon below
0.5683628571428571 days to reach the moon