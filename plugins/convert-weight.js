const convertWeightToReadableFormat = (weightString) => {
	const weight = parseFloat(weightString);
	let result;

	if (!isNaN(weight)) {
		if (weight >= 1000) {
          // Konversi ke ton jika berat lebih dari atau sama dengan 1000 KG
			result = `${(weight / 1000).toFixed(2)} Ton`;
		} else {
			result = `${weight.toFixed(2)} KG`;
		}
	} else {
		result = "Invalid Weight";
	}

	return result;
};

export default ({ app }, inject) => {
  inject("convweight", convertWeightToReadableFormat);
};
