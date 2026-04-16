import { getForecasts } from "../logic/forecastLogic.js";

export function renderForecast(root) {
  const forecasts = getForecasts();

  root.innerHTML = `
    <section class="panel">
      <h2>Seat Forecast</h2>
      <p>Predicted fill speed and risk levels.</p>

      <div class="card-grid">
        ${
          forecasts.length
            ? forecasts.map(f => `
              <article class="card risk-${f.risk}">
                <h3>${f.courseCode}</h3>
                <p>Risk: ${f.riskLabel}</p>
                <p>Typical fill time: ${f.fillTime}</p>
                <p>${f.recommendation}</p>
              </article>
            `).join("")
            : `<article class="card"><p>No forecast data yet.</p></article>`
        }
      </div>
    </section>
  `;
}
