export function renderFinance(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Financial Aid & Billing</h2>
      <div class="card">
        <p>Aid status: Pending</p>
        <p>Balance: $0.00</p>
        <p>Next due date: N/A</p>
        <p>Holds: None</p>
      </div>
    </section>
  `;
}
