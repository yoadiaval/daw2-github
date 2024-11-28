function obtenerAsignaruras(ciclo, curso) {
  daw = {
    2: ["DWEC", "DWES", "DIW", "DAP", "EIE"],
  };
  dam = {
    1: ["DB", "FOL", "PRO", "LM", "SINF"],
    2: ["ISO", "PAR", "FHR", "GBD", "LM"],
  };
  smr = {
    1: ["ASO", "SR", "IAE", "SGBD", "SAD"],
  };

  switch (ciclo) {
    case "dam":
      if (curso in dam) {
        return dam[curso];
      }
    case "daw":
      if (curso in daw) {
        return daw[curso];
      }
    case "smr":
      if (curso in smr) {
        return smr[curso];
      }
    default:
      return "no existe el ciclo o el curso especificado para ese ciclo";
  }
}

console.log(obtenerAsignaruras("smr", 1));
