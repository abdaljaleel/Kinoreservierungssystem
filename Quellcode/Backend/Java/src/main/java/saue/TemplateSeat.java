package saue;

public class TemplateSeat {
    private int tsId;
    private int row;
    private int column;
    private boolean handicap;
    private int splTid;
    private float price;

    public int getTsId() {
        return tsId;
    }

    public void setTsId(int tsId) {
        this.tsId = tsId;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getColumn() {
        return column;
    }

    public void setColumn(int column) {
        this.column = column;
    }

    public boolean isHandicap() {
        return handicap;
    }

    public void setHandicap(boolean handicap) {
        this.handicap = handicap;
    }

    public int getSplTid() {
        return splTid;
    }

    public void setSplTid(int splTid) {
        this.splTid = splTid;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
