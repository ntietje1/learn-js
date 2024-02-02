window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditNode(onEdit) {
  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit Text";
  editButton.addEventListener('click', () => {
    onEdit()
  });
  return editButton;

}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let onEdit = () => {
      let input = document.createElement("input");
      input.type = "Enter Cell (x,y)";
      input.value = col1.textContent;
      col1.textContent = '';
      col1.appendChild(input);
      input.focus();
      input.addEventListener('blur', () => {
      col1.textContent = input.value;
    }); };
    let col2 = createEditNode(() => { onEdit() });
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}