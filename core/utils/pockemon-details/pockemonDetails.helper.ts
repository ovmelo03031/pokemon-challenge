export function getTypeColor(type: string) {
    const colors: { [key: string]: string } = {
        normal: "bg-gray-400",
        fighting: "bg-red-500",
        flying: "bg-blue-300",
        poison: "bg-purple-500",
        ground: "bg-yellow-600",
        rock: "bg-yellow-800",
        bug: "bg-green-500",
        ghost: "bg-purple-700",
        steel: "bg-gray-500",
        fire: "bg-red-600",
        water: "bg-blue-500",
        grass: "bg-green-600",
        electric: "bg-yellow-400",
        psychic: "bg-pink-500",
        ice: "bg-blue-200",
        dragon: "bg-purple-600",
        dark: "bg-gray-800",
        fairy: "bg-pink-300",
    };
    return colors[type] || "bg-gray-400";
}