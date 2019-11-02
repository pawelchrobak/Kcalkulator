import { FoodItem } from './food-item';

export class DayRecord {
    private kcalLimit: number;
    private kcalConsumed: number;
    private foodItemsEaten: Array<FoodItem>;


	constructor($kcalLimit: number, $kcalConsumed: number, $foodItemsEaten: Array<FoodItem>) {
		this.kcalLimit = $kcalLimit;
		this.kcalConsumed = $kcalConsumed;
		this.foodItemsEaten = $foodItemsEaten;
	}

    public addEatenFoodItem(food: FoodItem): DayRecord {
        this.foodItemsEaten.push(food);
        this.kcalConsumed += food.$kcal;
        return this;
    } 

    /**
     * Getter $kcalLimit
     * @return {number}
     */
	public get $kcalLimit(): number {
		return this.kcalLimit;
	}

    /**
     * Getter $kcalConsumed
     * @return {number}
     */
	public get $kcalConsumed(): number {
		return this.kcalConsumed;
	}

    /**
     * Getter $foodItemsEaten
     * @return {Array<FoodItem>}
     */
	public get $foodItemsEaten(): Array<FoodItem> {
		return this.foodItemsEaten;
	}

    /**
     * Setter $kcalLimit
     * @param {number} value
     */
	public set $kcalLimit(value: number) {
		this.kcalLimit = value;
	}

    /**
     * Setter $kcalConsumed
     * @param {number} value
     */
	public set $kcalConsumed(value: number) {
		this.kcalConsumed = value;
	}

    /**
     * Setter $foodItemsEaten
     * @param {Array<FoodItem>} value
     */
	public set $foodItemsEaten(value: Array<FoodItem>) {
		this.foodItemsEaten = value;
	}
    
}
