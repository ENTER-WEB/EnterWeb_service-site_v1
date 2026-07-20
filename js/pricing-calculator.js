(function (global) {
  "use strict";

  function calculateWebsitePrice(pageCount) {
    const normalizedPageCount = Number(pageCount);

    if (!Number.isInteger(normalizedPageCount) || normalizedPageCount < 1) {
      throw new Error("pageCount must be an integer greater than or equal to 1.");
    }

    const topPagePrice = 250000;
    const lowerPagePrice = 50000;

    return topPagePrice + Math.max(normalizedPageCount - 1, 0) * lowerPagePrice;
  }

  function formatPrice(value) {
    return new Intl.NumberFormat("ja-JP").format(value);
  }

  global.EnterWebPricing = {
    calculateWebsitePrice,
    formatPrice
  };
})(window);
