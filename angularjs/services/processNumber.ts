class processNumber
{
  public count;

    constructor()
    {
        this.count = 0;
    }

    get(): number
    {
        return this.count++;
    }
}

angular.module(APP_NAME).service("processNumber", processNumber);
