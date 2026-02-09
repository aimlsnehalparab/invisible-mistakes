const riskWeights = {
  clicked_short_link: 25,
  allowed_location: 20,
  uploaded_file: 15,
  persistent_session: 30
};

let score = 0;

actions.forEach(action => {
  score += riskWeights[action] || 0;
});

if (score > 70) level = "High";
else if (score > 40) level = "Medium";
else level = "Low";
