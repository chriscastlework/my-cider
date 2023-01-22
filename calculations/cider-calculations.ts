import { FruitType, AdditionType } from '../models/models';

export interface ReadingValue {
  readings: string;
  result: string;
}

const RecommendedPotassiumSulphateAdditionForWildYeastLookUp: ReadingValue[] = [
  {readings: 'Below 3.0', result: 'None'},
  {readings: '3', result: 'None'},
  {readings: '3.1', result: '0.05 grams per Litre'},
  {readings: '3.2', result: '0.06 grams per Litre'},
  {readings: '3.3', result: '0.072 grams per Litre'},
  {readings: '3.4', result: '0.085 grams per Litre'},
  {readings: '3.5', result: '0.0103 grams per Litre'},
  {readings: '3.6', result: '0.0125 grams per Litre'},
  {readings: '3.7', result: '0.151 grams per Litre'},
  {readings: '3.8', result: '0.184 grams per Litre'},
  {readings: '3.9', result: '0.184 grams per Litre'},
  {readings: '4', result: '0.184 grams per Litre'},
  {readings: '4.1', result: '0.184 grams per Litre'},
  {readings: '4.2', result: '0.184 grams per Litre'}
];

export const PhMalicAcidLookup: ReadingValue[] = [
  { readings: '3.8', result: 'none' },
  { readings: '3.9', result: '0.1' },
  { readings: '4', result: '0.2' },
  { readings: '4.1', result: '0.3' },
  { readings: '4.2', result: '0.4' },
  { readings: 'above 4.2', result: 'Unspecified' },
];

export const RecommendedPotassiumSulphateAdditionForCulturedYeastLookUp: ReadingValue[]  = [
  { readings: 'Below 3.0', result: 'None'},
  { readings: '3', result: 'None'},
  { readings: '3.1', result: '0.1 grams per Litre'},
  { readings: '3.2', result: '0.12 grams per Litre'},
  { readings: '3.3', result: '0.144 grams per Litre'},
  { readings: '3.4', result: '0.17 grams per Litre'},
  { readings: '3.5', result: '0.206 grams per Litre'},
  { readings: '3.6', result: '0.25 grams per Litre'},
  { readings: '3.7', result: '0.302 grams per Litre'},
  { readings: '3.8', result: '0.368 grams per Litre'},
  { readings: '3.9', result: '0.368 grams per Litre'},
  { readings: '4', result: '0.368 grams per Litre'},
  { readings: '4.1', result: '0.368 grams per Litre'},
  { readings: '4.2', result: '0.368 grams per Litre'}
];

export const additionTypes = [
  AdditionType.Other,
  AdditionType.Sulphate,
  AdditionType.Water,
  AdditionType.Yeast,
];

export const yeastTypes = ['Please select', 'Wild', 'Cultured'];

export const culturedYeastTypes = ['Please select', 'Wine', 'Champagne', 'Cider'];

export const fruitTypes = [
  FruitType.Apples,
  FruitType.Pears,
  FruitType.Grapes,
  FruitType.Other,
];

export const PhReadings = [
  'Please select',
  'Less then 3.0',
  '3.0',
  '3.1',
  '3.2',
  '3.3',
  '3.4',
  '3.5',
  '3.6',
  '3.7',
  '3.8',
  '3.9',
  '4',
  '4.1',
  '4.2',
  'above 4.2',
];

export const specificGravityReadings = [
  'Please Select',
  '1.010',
  '1.015',
  '1.020',
  '1.025',
  '1.030',
  '1.035',
  '1.040',
  '1.045',
  '1.050',
  '1.055',
  '1.060',
  '1.065',
  '1.070',
  '1.075',
  '1.080',
  '1.085',
  '1.090',
  '1.095',
  '1.100',
  '1.105',
  '1.110',
  '1.115',
  '1.120',
  '1.125',
  '1.130',
  '1.135',
  '1.140',
];

export const specificGravityAbvPercentageLookUp = [
  { readings: '1.010', result: '0.4' },
  { readings: '1.015', result: '1.2' },
  { readings: '1.020', result: '2.0' },
  { readings: '1.025', result: '2.8' },
  { readings: '1.030', result: '3.6' },
  { readings: '1.035', result: '4.3' },
  { readings: '1.040', result: '5.1' },
  { readings: '1.045', result: '5.8' },
  { readings: '1.050', result: '6.5' },
  { readings: '1.055', result: '7.2' },
  { readings: '1.060', result: '7.9' },
  { readings: '1.065', result: '8.6' },
  { readings: '1.070', result: '9.3' },
  { readings: '1.075', result: '10.0' },
  { readings: '1.080', result: '10.6' },
  { readings: '1.085', result: '11.3' },
  { readings: '1.090', result: '12.0' },
  { readings: '1.095', result: '12.7' },
  { readings: '1.100', result: '13.4' },
  { readings: '1.105', result: '14.2' },
  { readings: '1.110', result: '14.9' },
  { readings: '1.115', result: '15.6' },
  { readings: '1.120', result: '16.3' },
  { readings: '1.125', result: '17.1' },
  { readings: '1.130', result: '17.8' },
  { readings: '1.135', result: '18.5' },
  { readings: '1.140', result: '19.3' },
];

export const getRecommendYeast = (
  originalPh: string,
  yeastType: string,
  litres: number
) => {
  let result;

  if (yeastType === 'Wild') {
    result = RecommendedPotassiumSulphateAdditionForWildYeastLookUp.find(
      (f) => f.readings === originalPh
    );
  }

  if (yeastType === 'Cultured') {
    result = RecommendedPotassiumSulphateAdditionForCulturedYeastLookUp.find(
      (f) => f.readings === originalPh
    );
  }

  if (!result) {
    return 'unknown';
  }

  const numberValue = Number(result.result);
  return `${result.result} grams per litre  ${litres} litres  = ${
    numberValue * litres
  }grams`;
};

export const getClosestSpecificGravityFromDesiredAbv = (desiredAbv: string) => {
  const desiredAbvValue = Number(desiredAbv);
  let nearestSpecificGravityValue = 0;
  let nearestAbvValue = 0;
  specificGravityAbvPercentageLookUp.forEach((element) => {
    const abvLookUpValue = Number(element.result);
    const newDiff = Math.abs(desiredAbvValue - abvLookUpValue);
    const diffCurrentDiff = Math.abs(desiredAbvValue - nearestAbvValue);
    if (newDiff < diffCurrentDiff) {
      nearestAbvValue = abvLookUpValue;
      nearestSpecificGravityValue = Number(element.readings);
    }
  });
  return nearestSpecificGravityValue;
};

export const getSugarAddition = (
  originalSpecificGravity: string,
  desiredABV: string,
  volume: number
) => {
  const desired = getClosestSpecificGravityFromDesiredAbv(desiredABV);
  const current = Number(originalSpecificGravity);
  const difference = desired - current;

  if (difference < 0) {
    return 'Nothing at present - additional water during blending stage';
  }
  if (difference > 0.0025) {
    const amount = Math.round((difference / 0.005) * 10);
    const result = Math.round(amount * volume);
    return `You should add ${amount} grams per litre x ${volume}  = ${result} grams`;
  }

  return 'Nothing at present';
};

export const getAbvFromOriginalSpecificGravityReading = (reading: string) => {
  const result = specificGravityAbvPercentageLookUp.find(
    (f) => f.readings === reading
  );
  if (result) {
    return result.result;
  }
  return 'Original specific gravity reading is required';
};

export const getMalicAcidFromPhReading = (reading: string, volume: number) => {
  const result = PhMalicAcidLookup.find((f) => f.readings === reading);
  if (result) {
    const perLitre = Number(volume);
    return `${result.result} grams per litre ${volume} litres = ${
      perLitre * volume
    } grams`;
  }
  return 'Original PH reading is required';
};

export const getSulphateFromPhReading = (reading: string, volume: number, yeastType: string) => {
  let result: ReadingValue | undefined = undefined;
  if (yeastType === 'Cultured') {
     result = RecommendedPotassiumSulphateAdditionForWildYeastLookUp.find((f) => f.readings === reading);
  } else if (yeastType === 'Wild')
  {
    result = RecommendedPotassiumSulphateAdditionForCulturedYeastLookUp.find((f) => f.readings === reading);
  } else {
    return 'Select Yeast Type';
  }
  if (result) {
    const perLitre = Number(volume);
    return `${result.result} grams per litre ${volume} litres = ${
      perLitre * volume
    } grams`;
  }
  return 'Original PH reading is required';
};
