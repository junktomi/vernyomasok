async function init() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container my-4">
      <h1 class="mb-4">Vérnyomás értékek</h1>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Név</th>
              <th>Vérnyomás</th>
            </tr>
          </thead>
          <tbody id="vernyomas-tbody">
            <tr>
              <td colspan="3">Adatok betöltése...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  const tbody = document.getElementById("vernyomas-tbody");

  try {
    const res = await fetch("/test.json");
    if (!res.ok) {
      throw new Error("Nem sikerült betölteni a test.json-t");
    }
    const data = await res.json();

    tbody.innerHTML = "";

    data.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.nev}</td>
        <td>${item.vernyomas}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error(err);
    tbody.innerHTML = `<tr><td colspan="3">Hiba az adatok betöltése közben</td></tr>`;
  }
}

init();
