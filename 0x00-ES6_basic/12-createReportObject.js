export default function appendToEachArrayValue(array, appendString) {
rt default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
  const arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendString + value);
  }

  return arr;
}
