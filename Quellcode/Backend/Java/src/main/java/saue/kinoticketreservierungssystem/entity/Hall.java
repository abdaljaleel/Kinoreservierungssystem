package saue;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Hall {
    @Id
    private int hid;
    private boolean accessible;
    private int cid;
    private int spTId;

    public int getHid() {
        return hid;
    }

    public void setHid(int hid) {
        this.hid = hid;
    }

    public boolean isAccessible() {
        return accessible;
    }

    public void setAccessible(boolean accessible) {
        this.accessible = accessible;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getSpTId() {
        return spTId;
    }

    public void setSpTId(int spTId) {
        this.spTId = spTId;
    }
}
