const exposureMap = {
  clicked_short_link: [
    "Browser & OS fingerprint exposed",
    "Referrer information shared",
    "Phishing redirection possible"
  ],
  allowed_location: [
    "Approximate location inferred",
    "Daily routine can be guessed",
    "Targeted scams become easier"
  ],
  uploaded_file: [
    "Metadata leakage possible",
    "File signature fingerprinting"
  ],
  persistent_session: [
    "Session hijacking risk",
    "Account misuse on shared devices"
  ]
};

const actions = JSON.parse(sessionStorage.getItem("actions")) || [];

actions.forEach(action => {
  const risks = exposureMap[action];
  // dynamically render cards
});
