const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export const getScrollY = () =>
    canUseDOM ? window.scrollY || window.pageYOffset : 0;

export const getWindowHeight = () => (canUseDOM ? window.innerHeight : 640); // Default size for server-side rendering

export const getClientHeight = (node) => {
    if (node !== null) {
        return canUseDOM ? node.getBoundingClientRect().height : 100;
    }
};
