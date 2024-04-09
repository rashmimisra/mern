const tableId =  document.getElementById("tables")
const fetchData = async () => {
    const dataJSON = await fetch('https://fakestoreapi.com/products');
    const data = await dataJSON.json();
    let displayInfo = "<table border='1>";
    displayInfo += "<tr>";
    displayInfo += "<th>ID</th><th>Name</th><th>Photo</th>";
    displayInfo += "</tr>";
  
    for (product of data) {
      displayInfo += "<tr>";
      displayInfo += `<td> ${product.id} </td>`;
      displayInfo += `<td> ${product.title} </td>`;
      displayInfo += `<td> <img src =${product.image} width=100 height=100/></td>`;
      displayInfo += "</tr>";
    }
  
    displayInfo += "</table>";
    tableId.innerHTML = displayInfo;
  };
  fetchData();