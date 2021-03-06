const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3001"
      : process.env.SITE_ORIGIN || "https://archetype-web.xsika.cz",
  name: "archetype",
  gauges_site_id: "GAUGES-XXX-DEMO",
  google_analytics_site_id: "GOOGLE-ANALYTICS-XXX-DEMO"
};

export default site;
