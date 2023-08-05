import moment from "moment";

export const FORMATS = {
  DATE: "date",
  LOCATION: "location",
  TIME: "time",
  DATETIME: "datetime",
};

export function wrapValue(value, format) {
  switch (format) {
    case FORMATS.LOCATION:
      return (
        <a href={`https://www.google.com/maps/search/${value}}`}>{value}</a>
      );
    default:
      return value;
  }
}

export function formatValue(value, format) {
  if (!value) {
    return value;
  }
  switch (format) {
    case FORMATS.DATE:
      return moment(value).format("ll");
    case FORMATS.TIME:
      return moment(value).format("LT");
    case FORMATS.DATETIME:
      return moment(value).format("lll");
    default:
      return value;
  }
}

export function wrapFormatValue(value, format) {
  return wrapValue(formatValue(value, format), format);
}
