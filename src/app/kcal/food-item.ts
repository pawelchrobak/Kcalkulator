export class FoodItem {
    private id: number;
    private name: string;
    private kcal: number;


	constructor($id: number, $name: string, $kcal: number) {
		this.id = $id;
		this.name = $name;
		this.kcal = $kcal;
	}

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $kcal
     * @return {number}
     */
	public get $kcal(): number {
		return this.kcal;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $kcal
     * @param {number} value
     */
	public set $kcal(value: number) {
		this.kcal = value;
	}
	
}
