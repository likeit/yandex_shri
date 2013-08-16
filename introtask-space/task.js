/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Array} position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {
    this.name = name;
    this.position = position;
    this.capacity = capacity;
    this.occupiedSpace = 0 ;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @name Vessel.report
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 100 из 200т.
 */
Vessel.prototype.report = function () {
    console.log("Корабль \""           + this.name +
                "\". Местоположение: " + this.position +
                ". Занято: "           + this.occupiedSpace +
                " из "                 + this.capacity + "т."
    )
};

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
    return this.capacity - this.occupiedSpace;
};

/**
 * Переносит корабль в указанную точку.
 * @param {Array|Planet} newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {
    if (newPosition.constructor.name == "Planet")
        this.position = newPosition.position;
    else
        this.position = newPosition;
};

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Array} position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
    this.name = name;
    this.position = position;
    this.availableAmountOfCargo = availableAmountOfCargo;
}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
    var availableAmountOfCargo;

    availableAmountOfCargo = (this.availableAmountOfCargo > 0) ? "Доступно груза: " + this.availableAmountOfCargo + "т." : "Грузов нет.";

    console.log("Планета \"" + this.name + "\". Местоположение: " + this.position + ". " + availableAmountOfCargo)
};

/**
 * Загружает на корабль заданное количество груза.
 *
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
    if (vessel.position == this.position) {
        vessel.occupiedSpace += cargoWeight;
        this.availableAmountOfCargo -= cargoWeight;
    }
};

/**
 * Выгружает с корабля заданное количество груза.
 *
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
    if (vessel.position == this.position) {
        vessel.occupiedSpace -= cargoWeight;
        this.availableAmountOfCargo += cargoWeight;
    }
};