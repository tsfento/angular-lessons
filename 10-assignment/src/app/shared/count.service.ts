export class CountService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCount++;
    console.log('Inactive: ' + this.activeToInactiveCount);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCount++;
    console.log('Active: ' + this.inactiveToActiveCount);
  }
}