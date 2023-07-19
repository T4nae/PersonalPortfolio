/**
 * The function `createPosition` generates an array of points in 3D space along a semicircular path.
 * @param {number} radius - The radius is the distance from the center of the position to each point.
 * It determines the size of the position.
 * @param center - The `center` parameter is an object that represents the coordinates of the center
 * point of the position. It has three properties: `x`, `y`, and `z`, which are all numbers. These
 * properties specify the x, y, and z coordinates of the center point respectively.
 * @param {number} numPoints - The parameter `numPoints` represents the number of points to be created
 * on the position.
 * @returns The function `createPosition` returns an array of points. Each point is represented as an
 * array of three numbers [x, y, z] along the circumference of semicircle.
 */
export const createPosition = (
    radius: number,
    center: {
        x: number;
        y: number;
        z: number;
    },
    numPoints: number
) => {
    const points: number[][] = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / (numPoints - 1)) * Math.PI;
        const x = center.x + radius * Math.sin(angle);
        const y = center.y + (radius / 6) * Math.cos(angle);
        const z = center.z - radius * Math.cos(angle);
        // console.log(i + ": x= " + x + " z= ", z);
        const point = [x, y, z];
        points.push(point);
    }

    return points;
};

/**
 * The function creates positions and scroll input ranges for x, y, and z coordinates
 * based on an index and a given position array for animations.
 * @param {number} index - The `index` parameter is the starting index from where the positions will be
 * created. It determines which positions from the `position` array will be included in the output.
 * @param {number[][]} position - The `position` parameter is an array of arrays containing three
 * numbers each. Each inner array represents the x, y, and z coordinates of a position.
 * @returns The function `createPositions` returns an object with three properties: `x`, `y`, and `z`.
 * Each property contains an object with two properties: `pos` and `inp`.
 */
export const createPositions = (
    index: number,
    position: number[][],
    range: [number, number]
): {
    x: {
        pos: number[];
        inp: number[];
    };
    y: {
        pos: number[];
        inp: number[];
    };
    z: {
        pos: number[];
        inp: number[];
    };
} => {
    const Positions = {
        x: { pos: [-20], inp: [0] },
        y: { pos: [-30], inp: [0] },
        z: { pos: [position[index][2]], inp: [0] },
    };

    for (let i = index; i < position.length; i++) {
        const num =
            ((range[1] - range[0]) * (i - index)) / (position.length - 1) +
            range[0];
        Positions.x.pos.push(position[i][0]);
        Positions.y.pos.push(position[i][1]);
        Positions.z.pos.push(position[i][2]);
        Positions.x.inp.push(num);
        Positions.y.inp.push(num);
        Positions.z.inp.push(num);
    }
    return Positions;
};
