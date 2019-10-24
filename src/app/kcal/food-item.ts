export class FoodItem {
    private id: number;
    private name: string;
    private kcal: number;


	constructor($id: number, $name: string, $kcal: number) {
		this.id = $id;
		this.name = $name;
		this.kcal = $kcal;
	}
    
}
