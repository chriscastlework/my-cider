export const estimatedAbvPercentage = () => {

}

export interface VesselStatusUpdate {
    serverId: string;
    lastStage: Stage;
}

export interface Vessel {
    serverId: string;
    id: string;
    name: string;
    stage: Stage;
    pressingId: string;
    materialType: MaterialType;
    volume: Number;
    imageUrl: string;
}

export interface PressingStage {
    serverId: string | null;
    id: string;
    date: string;
    vessels: string[]; 
    fruitType: FruitType;
    fruitVariety?: string;
    cost?: Number;
    growersName?: string;
    weight: Number;
    volume: Number;
    desiredAbv: Number; // 1.2 - 19.3 DONE
    batchNumber: string;
    yeastType: "Wild" | "Cultured"; // required
    culturedYeastType: "Wine" | "Champagne" | "Cider" | string;
    originalReadingInfoPH: number;//MeasureReadingInfoPH; // Less then 3.0 - above 3.8 in steps of  .1 
    originalSpecificGravity: number; //MeasureReadingInfoGravity; // required
    addedRecommendedYeastAmount: boolean;
    addedRecommendedSugarAmount: boolean;
    addedRecommendedMalicAcidAmount: boolean;
    addedRecommendedPotassiumSulphiteAmount: boolean;
    measureReadings: MeasureReading[]; 
    additions: Addition[];
    notes: Note[];
}

export interface FermentingStage {
    id: string,
    vesselIds: string[]; 
    measureReadings: MeasureReading[];
    additions: Addition[];
    notes: Note[];
}

export interface RackingStage {
    id: string;
    moves: MoveInfo[];
    measureReadings: MeasureReading[];
    additions: Addition[];
    notes: Note[];
}

export interface BlendingStage {
    id: string;
    vesselIds: string[]; 
    measureReadings: MeasureReading[];
    additions: Addition[];
    notes: Note[];
    recipe: Recipe;
    processes: Process[];
}

export interface Process {
    id: string;
    processType: ProcessType;
    comment: string; 
}

export interface Recipe {
    id: string;
    recipeSteps: RecipeStep[]; 
}

export interface RecipeStep {
    id: string;
    comment: string;
}

export interface MoveInfo {
    fromVesselId: string;
    toVesselId: string;
}

export interface Addition {
    id: string;
    serverId: string;
    date: string;
    vesselId: string;
    additionType: AdditionType;
    additionTypeInfo: AdditionTypeInfoSugar | AdditionTypeInfoWater | AdditionTypeInfoYeast | AdditionTypeInfoSulphate | AdditionTypeInfoPotassiumSulphate; 
}

export interface AdditionTypeInfoSugar {
    value: string;
}

export interface AdditionTypeInfoPotassiumSulphate {
    value: string;
}

export interface AdditionTypeInfoSulphate {
    value: string;
}

export interface AdditionTypeInfoWater {
    value: string;
}

export interface AdditionTypeInfoYeast {
    value: string;
}

export interface Note {
    serverId: string;
    id: string;
    date: string;
    vesselIds: string;
    stage: Stage;
    comments: string;
}

export interface MeasureReading {
    serverId: string;
    measureReadingType: MeasureReadingType;
    measureReadingInfo: MeasureReadingInfoPH | MeasureReadingInfoTotalAcidityGramsPerLitre | MeasureReadingInfoGravity | MeasureReadingInfoTotalAcidityPercentage
}

export interface MeasureReadingInfoPH {
    value: number; // Less then 3.0 - above 4.2 in steps of  .1
}

export interface MeasureReadingInfoTotalAcidityPercentage {
    value: number; // 0 - 100
}

export interface MeasureReadingInfoTotalAcidityGramsPerLitre {
    value: number; // 3.5 - 12
}

export interface MeasureReadingInfoGravity {
    value: string; // 1.140 to 1.035 in steps of 0.005   
}

export enum Stage {
    None = 'None',
    FreshPressed = 'Fresh Pressed',
    Fermenting = 'Fermenting',
    Racking = 'Racking',
    Blending = 'Blending'
}

export enum ProcessType {
    Pasteurisation = 'Pasteurisation'
}

export enum MeasureReadingType {
    PH = 'PH',
    Acid = 'Acid',
    Gravity = 'Gravity'
}

export enum MaterialType {
    Plastic = 'Plastic',
    Wood = 'Wood',
    Glass = 'Glass',
    StainlessSteel = 'Stainless Steel',
    Other = 'Other'
}

export enum FruitType {
    Apples = 'Apples',
    Pears = 'Pears',
    Grapes = 'Grapes',
    Other = 'Other'
}

export enum AdditionType {
    Water = 'Water',
    Sulphate = 'Sulphate',
    Yeast = 'Yeast',
    Other = "Other"
}


