export default class PaymentApi {
  constructor(server, local) {
    this.server = server;
    this.local = local;
  }

  plans() {
    return this.server.getPlans();
  }

  getHostedPage(planId) {
    return this.server.getHostedPage(planId);
  }

  getDashboardUrl() {
    return this.server.getPaymentDashboardUrl();
  }

  getOrders() {
    return this.server.getSubscriptionOrders();
  }
}
