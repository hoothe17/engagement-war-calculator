function num(id) {
  return Number(document.getElementById(id).value) || 0;
}

function getCommentary(score) {
  if (score <= 30) return "keep trying bud, nine vicious would eat u up";
  if (score <= 150) return "let’s figure out why you’re dropping mid";
  if (score <= 500) return "you are kinda groovy, ig";
  if (score <= 2000) return "let’s not stop";
  if (score <= 10000) return "Wow 😀 you’re actually trying";
  if (score <= 50000) return "u might go viral if u don’t stop";
  if (score <= 100000) return "can you do this next week?";
  if (score <= 500000) return "ur almost doing great u can do better";
  if (score <= 1000000) return "if u quit now ur slow";
  return "can i borrow $1000";
}

function calculate() {
  // TikTok points (Views = 0.5)
  const ttPoints =
    num("ttViews") * 0.5 +
    num("ttLikes") * 1 +
    num("ttComments") * 3 +
    num("ttShares") * 5 +
    num("ttSaves") * 4 +
    num("ttFollowers") * 10;

  // Instagram (Views = 0.25)
  const igPoints =
    num("igViews") * 0.25 +
    num("igLikes") * 0.5 +
    num("igComments") * 2 +
    num("igShares") * 3 +
    num("igFollowers") * 5;

  // YouTube (Views = 0.25)
  const ytPoints =
    num("ytViews") * 0.25 +
    num("ytLikes") * 1 +
    num("ytComments") * 3 +
    num("ytSubs") * 10;

  const bonusRaw = igPoints + ytPoints;
  const bonusCap = ttPoints * 0.25; // Bonus platforms capped at 25% of TikTok score
  const bonusFinal = Math.min(bonusRaw, bonusCap);

  const finalScore = ttPoints + bonusFinal;
  const message = getCommentary(finalScore);

  document.getElementById("output").innerHTML = `
    TikTok Points: <b>${ttPoints.toLocaleString()}</b><br>
    Bonus Points (Capped): <b>${bonusFinal.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}</b><br>
    <hr style="border:0; border-top:1px solid #333; margin: 15px 0;">
    🏆 <span style="font-size: 24px;">FINAL SCORE: <b>${finalScore.toLocaleString(undefined, {maximumFractionDigits: 1})}</b></span><br>
    <span class="commentary">"${message}"</span>
  `;
}
