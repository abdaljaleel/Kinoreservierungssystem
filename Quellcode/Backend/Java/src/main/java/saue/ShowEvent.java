package saue;

public class ShowEvent {
    @ID
    private int sID;
    private int dataTime;
    private boolean ist3D;
    private int mid;
    private int sepId;

    public int getsID() {
        return sID;
    }

    public void setsID(int sID) {
        this.sID = sID;
    }

    public int getDataTime() {
        return dataTime;
    }

    public void setDataTime(int dataTime) {
        this.dataTime = dataTime;
    }

    public boolean isIst3D() {
        return ist3D;
    }

    public void setIst3D(boolean ist3D) {
        this.ist3D = ist3D;
    }

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public int getSepId() {
        return sepId;
    }

    public void setSepId(int sepId) {
        this.sepId = sepId;
    }
}
