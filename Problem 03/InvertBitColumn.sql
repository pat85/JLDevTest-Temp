CREATE PROCEDURE InvertBitColumn
    @Id INT,
    @Column CHAR(1)
AS
BEGIN
    DECLARE @SQL NVARCHAR(MAX)
    DECLARE @ColumnName NVARCHAR(3)
    
    -- Validate the input column name
    SET @ColumnName = CASE @Column
        WHEN 'A' THEN 'A'
        WHEN 'B' THEN 'B'
        WHEN 'C' THEN 'C'
        WHEN 'D' THEN 'D'
        WHEN 'E' THEN 'E'
        ELSE NULL
    END

    IF @ColumnName IS NULL
    BEGIN
        RAISERROR('Invalid column name', 16, 1)
        RETURN
    END

    -- Construct the dynamic SQL to invert the BIT value
    SET @SQL = N'
        UPDATE #TEST2
        SET ' + QUOTENAME(@ColumnName) + N' = CASE 
            WHEN ' + QUOTENAME(@ColumnName) + N' IS NULL THEN ' + QUOTENAME(@ColumnName) + N'
            ELSE ~CAST(' + QUOTENAME(@ColumnName) + N' AS BIT)
        END
        WHERE [Id] = @Id AND ' + QUOTENAME(@ColumnName) + N' IS NOT NULL;'

    -- Execute the dynamic SQL
    EXEC sp_executesql @SQL, N'@Id INT', @Id
END
